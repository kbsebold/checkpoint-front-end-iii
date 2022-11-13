import Card from "./Card";
import { useState } from "react";

function App(){

  const [formData, setFormData] = useState({song:"",band:""});
  const [dadosAlbum, setCapaAlbum] = useState({album:"",urlAlbum:""});
  const [infos, setInfos] = useState([]);

  function addInfos(){
    setInfos([...infos, {...formData,...dadosAlbum}]);
  }

  function handleSubmit(event){
    event.preventDefault();

    if(formData.song.length < 3 || formData.song[0] === " ") {
      alert("Por favor, verifique os dados inseridos no formulário");
      return;
    }


    if(dadosAlbum.album.length < 3) {
      alert("Por favor, verifique os dados inseridos no nome do album");
      return;
    }

    if(dadosAlbum.urlAlbum === "") {
      alert("Por favor, insira o link da imagem da capa do album");
      return;
    }


    if(formData.band.length < 6 ) {
      alert("Por favor, verifique os dados inseridos no formulário");
      return;
    }
    addInfos();
  }


  return (
    <div className="container">
      <h1 className="title">Músicas favoritas</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input_1">
          <label>Nome da Música:<input type="text" value={formData.song} onChange={(event)=> setFormData({...formData, song:event.target.value})} /></label>
          <label>Nome da Banda:<input type="text" value={formData.band} onChange={(event)=> setFormData({...formData, band:event.target.value})} /></label> 
        </div>
        <div>
          <label>Nome do Album: <input type="text" value={dadosAlbum.album} onChange={(event)=> setCapaAlbum({...dadosAlbum, album:event.target.value})} /></label>
          <label>Capa do Album: <input type="text" placeholder="digite o link da imagem do album" value={dadosAlbum.urlAlbum} onChange={(event)=> setCapaAlbum({...dadosAlbum, urlAlbum:event.target.value})} /></label>
        </div>
    
        <input className="button" type="submit" value="Adicionar"/>
      </form>



      {infos.map((info) => (
        <Card song={info.song.toUpperCase()} band={info.band.toUpperCase()} album={info.album.toUpperCase()} urlAlbum={info.urlAlbum}/>
      ))}
    </div>
  )
}

export default App;