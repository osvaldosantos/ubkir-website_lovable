import * as React from 'npm:react@18.3.1'
import { template as systemTest } from './system-test.tsx'
import { template as contactGeneral } from './contact-general.tsx'
import { template as contactTraining } from './contact-training.tsx'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  displayName?: string
  previewData?: Record<string, any>
  to?: string
}

export const TEMPLATES: Record<string, TemplateEntry> = {
  'system-test': systemTest,
  'contact-general': contactGeneral,
  'contact-training': contactTraining,
}