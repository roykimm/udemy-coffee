import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <p>c 2022 Gobella</p>
      </footer>  
    </div>
  )
}

export default MyApp
