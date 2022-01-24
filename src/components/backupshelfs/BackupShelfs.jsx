import React, { useContext, useState } from 'react';
import { ItemContext } from '../../context/itemContext/ItemContext';
import { Main } from '../layout/Main';



export const BackupShelfs = () => {

    const itemContext = useContext(ItemContext);
    const { createBackupShelf } = itemContext;


    const [name, setName] = useState('name');
    const [number, setNumber] = useState('number');


    const handlerChangeName = (e)=>{
        setName(e.target.value)
    }

    const handlerChangeNumber = (e)=>{
        setNumber(e.target.value)
    }

    const handlerCreate = (name, number) =>{
        if(name === "name" || number === "number"){return}
        const shelf_number_backup = name+number;
        console.log("Backup Shelf: ", {shelf_number_backup})
        createBackupShelf({shelf_number_backup});
    }

  return (
    <Main>
        <div className='flex justify-center'>
            <h1 className='text-xl md:text-4xl'>Create Backup Shelfs</h1>
        </div>

        <div className='flex flex-col md:flex-row md:justify-center mt-10'>

            <div className='self-center'>
                <select onChange={(e)=>handlerChangeName(e)} value={name} className='text-5xl px-4 py-2 m-4 rounded-xl'>
                    <option value="name">name</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>
            </div>
            
            <div className='self-center'>
                <select onChange={(e)=>handlerChangeNumber(e)} value={number} className='text-5xl px-4 py-2 m-4 rounded-xl'>
                    <option value="number">number</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div className='self-center'>
                <button className='px-3 py-5 rounded-lg bg-slate-300 hover:bg-teal-500 text-4xl text-gray-500 hover:text-white'
                onClick={ ()=> handlerCreate(name,number)}>create</button>
            </div>
        </div>

    </Main>
  
  )
};
