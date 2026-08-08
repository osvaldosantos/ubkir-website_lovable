import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

type ImageMap = Record<string, string>;

interface SiteImagesContextType {
  images: ImageMap;
  reloadImages: () => Promise<void>;
}

const SiteImagesContext = createContext<SiteImagesContextType>({
  images: {},
  reloadImages: async () => {},
});

export const SiteImagesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<ImageMap>({});

  const reloadImages = useCallback(async () => {
    const { data, error } = await supabase.from("site_images").select("key, url");
    if (error || !data) return;
    const next: ImageMap = {};
    for (const row of data) {
      if (row.url) next[row.key] = row.url;
    }
    setImages(next);
  }, []);

  useEffect(() => {
    reloadImages();
  }, [reloadImages]);

  return (
    <SiteImagesContext.Provider value={{ images, reloadImages }}>
      {children}
    </SiteImagesContext.Provider>
  );
};

export const useSiteImages = () => useContext(SiteImagesContext);

/** Returns the managed image for a key, falling back to the bundled asset. */
export const useSiteImage = (key: string, fallback: string) => {
  const { images } = useSiteImages();
  return images[key] || fallback;
};
