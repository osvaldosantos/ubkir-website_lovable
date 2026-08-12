import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  firstName?: string
  lastName?: string
  email?: string
  subject?: string
  message?: string
}

const Email = ({ firstName, lastName, email, subject, message }: Props) => (
  <Html lang="pt" dir="ltr">
    <Head />
    <Preview>{`Novo contacto: ${subject || 'General Inquiry'}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={badge}>UBKIR</Section>
        <Heading style={heading}>Novo contacto do site</Heading>
        <Text style={label}>Nome</Text>
        <Text style={value}>{`${firstName || ''} ${lastName || ''}`.trim() || '—'}</Text>
        <Text style={label}>Email</Text>
        <Text style={value}>{email || '—'}</Text>
        <Text style={label}>Assunto</Text>
        <Text style={value}>{subject || 'General Inquiry'}</Text>
        <Hr style={hr} />
        <Text style={label}>Mensagem</Text>
        <Text style={{ ...value, whiteSpace: 'pre-wrap' }}>{message || '—'}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `Contacto do site: ${data?.subject || 'General Inquiry'}`,
  displayName: 'Contacto geral',
  to: 'info@ubkir.pt',
  previewData: {
    firstName: 'Maria',
    lastName: 'Silva',
    email: 'maria@example.com',
    subject: 'Pedido de informação',
    message: 'Gostaria de saber mais sobre os vossos serviços.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '560px' }
const badge = { color: '#BF0D3B', fontWeight: 700, letterSpacing: '2px', fontSize: '14px', marginBottom: '16px' }
const heading = { fontSize: '22px', color: '#111827', margin: '0 0 20px' }
const label = { fontSize: '12px', color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: '14px 0 2px' }
const value = { fontSize: '15px', color: '#111827', margin: '0', lineHeight: '23px' }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
