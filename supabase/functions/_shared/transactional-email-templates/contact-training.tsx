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
  name?: string
  email?: string
  organization?: string
  program?: string
  comments?: string
}

const Email = ({ name, email, organization, program, comments }: Props) => (
  <Html lang="pt" dir="ltr">
    <Head />
    <Preview>{`Nova inscrição em formação: ${program || ''}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={badge}>UBKIR</Section>
        <Heading style={heading}>Nova inscrição em formação</Heading>
        <Text style={label}>Nome</Text>
        <Text style={value}>{name || '—'}</Text>
        <Text style={label}>Email</Text>
        <Text style={value}>{email || '—'}</Text>
        <Text style={label}>Organização</Text>
        <Text style={value}>{organization || 'Not specified'}</Text>
        <Text style={label}>Programa</Text>
        <Text style={value}>{program || '—'}</Text>
        <Hr style={hr} />
        <Text style={label}>Comentários</Text>
        <Text style={{ ...value, whiteSpace: 'pre-wrap' }}>{comments || 'No additional comments'}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `Inscrição em formação: ${data?.program || 'Programa'}`,
  displayName: 'Inscrição em formação',
  to: 'info@ubkir.pt',
  previewData: {
    name: 'João Costa',
    email: 'joao@example.com',
    organization: 'Hospital X',
    program: 'Mindfulness',
    comments: 'Disponível em horário pós-laboral.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '560px' }
const badge = { color: '#BF0D3B', fontWeight: 700, letterSpacing: '2px', fontSize: '14px', marginBottom: '16px' }
const heading = { fontSize: '22px', color: '#111827', margin: '0 0 20px' }
const label = { fontSize: '12px', color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: '14px 0 2px' }
const value = { fontSize: '15px', color: '#111827', margin: '0', lineHeight: '23px' }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
