import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  sentAt?: string
}

const Email = ({ sentAt }: Props) => (
  <Html lang="pt" dir="ltr">
    <Head />
    <Preview>Teste de entrega de email UBKIR</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={badge}>UBKIR</Section>
        <Heading style={heading}>Teste de entrega de email</Heading>
        <Text style={text}>
          Esta mensagem confirma que o envio de emails a partir de
          notify.ubkir.pt está a funcionar corretamente.
        </Text>
        <Text style={muted}>
          Enviado a: {sentAt || new Date().toISOString()}
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'Teste de entrega — UBKIR',
  displayName: 'System test',
  previewData: { sentAt: '2026-08-12T10:00:00Z' },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Helvetica, Arial, sans-serif',
}
const container = { padding: '32px 28px', maxWidth: '560px' }
const badge = {
  color: '#BF0D3B',
  fontWeight: 700,
  letterSpacing: '2px',
  fontSize: '14px',
  marginBottom: '16px',
}
const heading = { fontSize: '22px', color: '#111827', margin: '0 0 12px' }
const text = { fontSize: '15px', color: '#374151', lineHeight: '24px' }
const muted = { fontSize: '13px', color: '#6b7280', marginTop: '20px' }