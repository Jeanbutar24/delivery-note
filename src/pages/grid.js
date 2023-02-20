import Head from 'next/head';
import Container from '@/components/Container';
import TableWrapper from '@/components/Table/TableWrapper';
import axios from 'axios';
import { useState } from 'react';
import Select from 'react-select';
import Modal from '@/components/Modal/Modal';
import dynamic from 'next/dynamic';

const DynamicModal = dynamic(() => import('@/components/Modal/Modal2'), {
  ssr: false,
});

const Grid = ({ data }) => {
  console.log(data);
  const date = new Date();

  const [isOpen, setIsOpen] = useState(false);
  const [itemDetail, setItemDetail] = useState(null);
  const option = [
    {
      value: 1,
      label: 'Unprocessed',
    },
    { value: 2, label: 'Onprocessed' },
  ];

  const openDetail = () => {
    setIsOpen(!isOpen);
  };
  const f = new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'full',
  });

  const columns = [
    {
      Header: 'No',
      accessor: 'id',
    },
    {
      Header: 'Kode Toko',
      accessor: 'kode_toko',
    },
    {
      Header: 'Name',
      accessor: 'sales_name',
    },
    {
      Header: 'Address',
      accessor: 'address',
    },
    {
      Header: 'Nomor SJ',
      accessor: 'nomor_sj',
    },
    {
      Header: 'Date SJ',
      accessor: 'date_sj',
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: (props) => {
        return (
          <p className={`border-2 bg-white rounded-[10px] ${props.value ? 'text-[green]' : 'text-[#c4c431]'}`}>
            {props.value === true ? 'Unprosessed' : 'Onprocessed'}
          </p>
        );
      },
    },
  ];
  return (
    <Container>
      <div className='grid grid-cols-2  gap-4 sm:grid-cols-3 md:grid-cols-5 p-3  '>
        <DynamicModal isOpen={isOpen} isClose={setIsOpen} title='Travel Document Detail'>
          <div className='w-[80vw] '>
            <div className='sm:flex-row flex flex-col gap-11 justify-center'>
              <div className=''>
                <div className=''>
                  <p className='font-medium mt-[20px] text-[19px]'>Detail Barang :</p>
                  <div className='max-h-[200px] min-h-[170px]'>
                    <table className='mt-2 max-w-[100%] md:w-[600px]'>
                      <thead>
                        <tr className='bg-[#eeeeee]'>
                          <th>No:</th>
                          <th>Tipe</th>
                          <th>Kode Barang</th>
                          <th>Warna</th>
                          <th>Qty</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>Meja kantor</td>
                          <td>FR19</td>
                          <td>Cherry</td>
                          <td>2</td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>Laci</td>
                          <td>PO04</td>
                          <td>Cherry</td>
                          <td>4</td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>Meja kantor</td>
                          <td>A6716</td>
                          <td>Blue Jeans</td>
                          <td>100</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <p className='font-medium mt-[20px] text-[19px]'>Detail Tujuan :</p>
                  <div className=' rounded-[10px] bg-[#eeeeee] p-2 mt-2'>
                    <div className='flex mb-2'>
                      <p className='w-[50%] text-[16px] font-Lato font-[500] '>Nama:</p>
                      <p className='w-[50%] text-[16px] font-Lato font-[500]'>Ari Nugroho</p>
                    </div>
                    <div className='flex'>
                      <p className='w-[50%] text-[16px] font-Lato font-[500]'>Alamat:</p>
                      <p className='w-[50%] text-[16px] font-Lato font-[500]'>Permata depok, Mirah 1 L1/6, CIPAYUNG, KOTA DEPOK, JAWA BARAT</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-[#175050] md:w-[350px] mt-12 rounded-[25px]'>
                <div>
                  <p className='font-medium mt-[20px] text-[19px] ml-[15px] text-white'>Detail SJ </p>
                </div>
                <div className='flex w-full justify-end'>
                  <p className='text-white mt-5 mr-3'>24 Januari 2023</p>
                </div>
                <div className='flex items-center text-white justify-center mt-7'>
                  <div className='w-[50%] flex items-center gap-[20px]'>
                    <div className='h-[10px] w-[10px] bg-[#118F53] rounded-[50%]' />
                    <p className='font-lato text-[16px]'>Kode Toko</p>
                  </div>
                  <div className='w-[45%]'>
                    <p className='font-lato text-[16px]'>{itemDetail?.kode_toko}</p>
                  </div>
                </div>
                <div className='flex items-center text-white justify-center mt-5'>
                  <div className='w-[50%] flex items-center gap-[20px]'>
                    <div className='h-[10px] w-[10px] bg-[white] rounded-[50%]' />
                    <p className='font-lato text-[16px]'>Nomor SJ</p>
                  </div>
                  <div className='w-[45%]'>
                    <p className='font-lato text-[16px]'>{itemDetail?.nomor_sj}</p>
                  </div>
                </div>
                <div className='flex items-center text-white justify-center mt-5'>
                  <div className='w-[50%] flex items-center gap-[20px]'>
                    <div className='h-[10px] w-[10px] bg-[#118F53] rounded-[50%]' />
                    <p className='font-lato text-[16px]'>Supir</p>
                  </div>
                  <div className='w-[45%]'>
                    <p className='font-lato text-[16px]'>Nurdin</p>
                  </div>
                </div>
                <div className='flex items-center text-white justify-center mt-5'>
                  <div className='w-[50%] flex items-center gap-[20px]'>
                    <div className='h-[10px] w-[10px] bg-[white] rounded-[50%]' />
                    <p className='font-lato text-[16px]'>Tanggal Kirim</p>
                  </div>
                  <div className='w-[45%]'>
                    <p className='font-lato text-[16px]'>08 Februari 2023</p>
                  </div>
                </div>
                <div className='flex w-full justify-end  mt-9 '>
                  <div className='flex flex-col mb-3 items-center'>
                    <p className='text-white mr-5  md:mr-3 font-Roboto md:text-[20px] '>{itemDetail?.sales_name}</p>
                    <div className='h-[2px] w-[30px] bg-[gray]' />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex gap-2 md:gap-6 mt-10 justify-end md:mr-12 mb-3'>
              <button
                onClick={() => setIsOpen(false)}
                className='bg-[#F90606] hover:bg-[#E00606] text-[17px]  border-[#E85C5C] border-2 p-1 px-3 rounded-[15px] text-white'
              >
                Close
              </button>
              <button className='bg-[#487C70] hover:bg-[#417166] text-[17px] border-2 p-1 px-3 border-[#159F7F]  rounded-[15px] text-white'>
                Print
              </button>
            </div>
          </div>
        </DynamicModal>
        <div className=' rounded-[12px]  col-span-2 sm:col-span-4 p-4 grid gap-3 md:col-start-1 md:col-span-5 '>
          <div className=' text-[black] font-[400] w-[90vw] sm:w-[100%] items-center rounded-[12px] flex justify-between'>
            <Select options={option} defaultValue={{ value: 1, label: 'Unprocessed' }} instanceId='1' />
            <input type='text' defaultValue={f.format(date)} readOnly className={'outline-none rounded-[5px] p-[6px] text-gray-800  border-2'} />
          </div>
          <div className=' sm:w-[100%] w-[90vw]  rounded-[12px]'>
            <div className=''>
              <TableWrapper data={data} header={columns} action={true}>
                {(row) => {
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell, i) => {
                        return (
                          <td key={i} {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                      <td>
                        <button
                          className='bg-blue-700 text-white px-3 rounded-[10px]'
                          onClick={() => {
                            openDetail();
                            setItemDetail(row.original);
                          }}
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  );
                }}
              </TableWrapper>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Grid;

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3001/deliverydata');

  return {
    props: {
      data: res.data,
    },
  };
};
