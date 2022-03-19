import Container from './styled'
export default function Colors({ children, theme }) {
  return (
    <Container theme={theme}>
    { children }
    </Container>
  )
}