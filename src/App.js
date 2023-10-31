import logo from './logo.svg';
import './App.css';
import { Template } from './components/Template';
import { TbEditCircle } from 'react-icons/tb';
import { TiEdit } from 'react-icons/ti';
import { FaSave, FaPlus, FaDoorOpen } from 'react-icons/fa';
import { LuSave } from 'react-icons/lu';
import { BsPlusCircleFill } from 'react-icons/bs';
import { MdOutlineManageSearch, MdCallReceived, MdDeleteForever } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';

import { ImSpinner3, ImSpinner4, ImDownload } from 'react-icons/im';
import { IoIosSend } from 'react-icons/io';
import { RiFolderReceivedFill, RiEye2Line, RiDeleteBin3Fill, RiCloseCircleFill } from 'react-icons/ri';

import { TiEye } from 'react-icons/ti';
import { BsDoorClosedFill } from 'react-icons/bs';
import { PiFolderOpenFill, PiDownloadFill } from 'react-icons/pi';

import { GrSend } from 'react-icons/gr';

import {ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <div>React Icons</div>

        <div className='container'>
          <Template title="Editar" elements={[<TbEditCircle name={"TbEditCircle"} />, <TiEdit name={TiEdit}/>]} />
          <Template title="Guardar"  elements={[<FaSave name={"FaSave"}/>, <LuSave name={"LuSave"}/>]} />
          <Template title="Insertar" elements={[<BsPlusCircleFill name={"BsPlusCircleFill"}/>, <FaPlus name={"FaPlus"}/>]} />

        </div>

        <div className='container'>
          <Template title="Buscar"  elements={[<MdOutlineManageSearch name={"MdOutlineManageSearch"}/>, <BiSearchAlt2 name={"BiSearchAlt2"}/>]} />
          <Template title="Procesar" elements={[<ImSpinner3 name={"ImSpinner3"}/>, <ImSpinner4 name={"ImSpinner4"}/>]} />
          <Template title="Descargar"  elements={[<ImDownload name={"ImDownload"}/>, <PiDownloadFill name={"PiDownloadFill"}/>]} />

        </div>
      
        <div className='container'>
          <Template title="Enviar" elements={[<IoIosSend name={"IoIosSend"}/>, <GrSend name={"GrSend"}/>]} />
          <Template title="Recibir"  elements={[<MdCallReceived name={"MdCallReceived"}/>, <RiFolderReceivedFill name={"RiFolderReceivedFill"}/>]} />
          <Template title="Ver"  elements={[<RiEye2Line name={"RiEye2Line"}/>, <TiEye name={"TiEye"}/> ]} />

        </div>

        <div className='container'>
          <Template title="Eliminar" elements={[<MdDeleteForever name={"MdDeleteForever"}/>, <RiDeleteBin3Fill name={"RiDeleteBin3Fill"}/>]} />
          <Template title="Cerrar" elements={[<RiCloseCircleFill name={"RiCloseCircleFill"}/>, <BsDoorClosedFill name={"BsDoorClosedFill"}/>]} />
          <Template title="Abrir"  elements={[<PiFolderOpenFill name={"PiFolderOpenFill"}/>, <FaDoorOpen name={"FaDoorOpen"}/>]} />

        </div>

        {/* <div className='container'>
          <Template title="Cargar" elements={[]} />
        </div> */}

      </header>

  <ToastContainer/>
    </div>
  );
}

export default App;
