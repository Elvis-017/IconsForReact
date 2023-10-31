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

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <div>React Icons</div>

        <div className='container'>
          <Template title="Editar" elements={[<TbEditCircle/>, <TiEdit/>]} />
          <Template title="Guardar"  elements={[<FaSave/>, <LuSave/>]} />
          <Template title="Insertar" elements={[<BsPlusCircleFill/>, <FaPlus/>]} />

        </div>

        <div className='container'>
          <Template title="Buscar"  elements={[<MdOutlineManageSearch/>, <BiSearchAlt2/>]} />
          <Template title="Procesar" elements={[<ImSpinner3/>, <ImSpinner4/>]} />
          <Template title="Descargar"  elements={[<ImDownload/>, <PiDownloadFill/>]} />

        </div>
      
        <div className='container'>
          <Template title="Enviar" elements={[<IoIosSend/>, <GrSend/>]} />
          <Template title="Recibir"  elements={[<MdCallReceived/>, <RiFolderReceivedFill/>]} />
          <Template title="Ver"  elements={[<RiEye2Line/>, <TiEye/> ]} />

        </div>

        <div className='container'>
          <Template title="Eliminar" elements={[<MdDeleteForever/>, <RiDeleteBin3Fill/>]} />
          <Template title="Cerrar" elements={[<RiCloseCircleFill/>, <BsDoorClosedFill/>]} />
          <Template title="Abrir"  elements={[<PiFolderOpenFill/>, <FaDoorOpen/>]} />

        </div>

        {/* <div className='container'>
          <Template title="Cargar" elements={[]} />
        </div> */}

      </header>

    </div>
  );
}

export default App;
