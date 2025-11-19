export default function TestLogo() {
  return (
    <div style={{ padding: '50px', background: 'white' }}>
      <h1>Logo Test Page</h1>
      
      <h2>Test 1: Regular img tag with /logo.png</h2>
      <img src="/logo.png" alt="Logo Test 1" width={100} height={100} style={{ border: '2px solid red' }} />
      
      <h2>Test 2: Regular img tag with /images/logo.png</h2>
      <img src="/images/logo.png" alt="Logo Test 2" width={100} height={100} style={{ border: '2px solid blue' }} />
      
      <h2>Test 3: Full path</h2>
      <img src="http://localhost:3000/logo.png" alt="Logo Test 3" width={100} height={100} style={{ border: '2px solid green' }} />
      
      <h2>Direct link tests:</h2>
      <p><a href="/logo.png" target="_blank">Open /logo.png</a></p>
      <p><a href="/images/logo.png" target="_blank">Open /images/logo.png</a></p>
    </div>
  )
}
