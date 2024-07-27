function Dashboard() {
    console.log('start dashboard')
    console.log('end  dashboard')
}

function App () {
    console.log('start app')
    console.log('end of app') 
    }
  
    function AuthProvider() {
        useEffect(() => {

        }, [])
      console.log('start Auth provider')
      App()
      console.log('end Auth provider')
    }
  
    function BrowserRouter() {
      console.log('start browser router')
        AuthProvider()
      console.log('end browser router')
    }
  
    BrowserRouter()