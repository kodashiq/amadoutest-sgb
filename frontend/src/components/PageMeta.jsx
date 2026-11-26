export default function PageMeta({ titre, description }) {
  return (
    <>
      <title>{titre} — Portfolio Amadou Fofana</title>
      <meta name="description" content={description} />
    </>
  )
}
