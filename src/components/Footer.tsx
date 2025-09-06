const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">UBKIR</h3>
            <p className="text-sm text-muted-foreground">
              Unbreakable Idea Research - Advancing Health Through Innovation, Research, and Education
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Estrada Nacional 115, nº1</p>
              <p>2550-426 Painho, Portugal</p>
              <p>geral@ubkir.pt</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Research Activities</p>
              <p>Training Programs</p>
              <p>Clinical Services</p>
              <p>Editorial Services</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Unbreakable Idea Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;