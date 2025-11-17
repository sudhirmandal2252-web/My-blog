        // Simple React-like frontend file (can be used with Vite or direct bundler)
        export default function App(){
  const root = document.getElementById('app')
  root.innerHTML = `
    <div style="max-width:700px;margin:30px auto;font-family:sans-serif">
      <h1>Voice Cleaner</h1>
      <input id="file" type="file" accept="audio/*" />
      <div style="margin-top:10px"><button id="cleanBtn">Clean Voice</button></div>
      <div id="status" style="margin-top:12px"></div>
      <div id="download" style="margin-top:12px"></div>
    </div>`

  document.getElementById('cleanBtn').onclick = async ()=>{
    const f = document.getElementById('file').files[0]
    if(!f) return alert('Choose an audio file')
    const status = document.getElementById('status')
    status.innerText = 'Uploading...'
    const form = new FormData()
    form.append('file', f)
    form.append('demucs', 'false')
    try{
      const resp = await fetch('/clean', {method:'POST', body: form})
      if(!resp.ok){ status.innerText = 'Server error'; return }
      const blob = await resp.blob()
      const url = URL.createObjectURL(blob)
      document.getElementById('download').innerHTML = `<a href="${url}" download>Download Cleaned Audio</a>`
      status.innerText = 'Done — download below'
    }catch(e){ status.innerText = 'Upload failed: '+e }
  }
}

        // auto-run when loaded in browser
        try{ const mod = typeof window !== 'undefined' ? window : null }catch(e){}
