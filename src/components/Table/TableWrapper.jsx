// import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
import { useState } from 'react';
import Select from 'react-select';
import Modal from '../Modal/Modal';
import { useTable } from 'react-table';
const TableWrapper = ({ data, columns, dataTable }) => {
  const [isOpen, setIsopen] = useState(false);
  const [itemDetail, setItemDetail] = useState(null);
  const date = new Date();
  // const {} = useTable({ columns, data: dataTable });
  const f = new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'full',
  });
  const option = [
    {
      value: 1,
      label: 'Unprocessed',
    },
    { value: 2, label: 'Onprocessed' },
  ];

  const openDetail = () => {
    setIsopen(!isOpen);
  };
  return (
    <div className='flex w-full flex-col justify-center items-center mt-7'>
      <Modal open={isOpen} onClose={() => setIsopen(false)} title='Travel Document Detail'>
        <div className='w-[80vw] '>
          <div className='flex gap-11 justify-center'>
            <div className='w-[600px]'>
              <div className=''>
                <p className='font-medium mt-[20px] text-[19px]'>Detail Barang :</p>
                <table className='ml-[15px] mt-2 w-full'>
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
              <div>
                <p className='font-medium mt-[20px] text-[19px]'>Detail Tujuan :</p>
                <div className='ml-[15px] rounded-[10px] bg-[#eeeeee] p-2 mt-2'>
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
            <div className='bg-[#175050] w-[350px] mt-12 rounded-[25px]'>
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
                <div className='flex flex-col items-center'>
                  <p className='text-white mr-3 font-Roboto text-[20px] '>{itemDetail?.sales_name}</p>
                  <div className='h-[2px] w-[30px] bg-[gray]' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-6 mt-10 justify-end mr-12 mb-3'>
            <button
              onClick={() => setIsopen(false)}
              className='bg-[#F90606] hover:bg-[#E00606] text-[17px]  border-[#E85C5C] border-2 p-1 px-3 rounded-[15px] text-white'
            >
              Close
            </button>
            <button className='bg-[#487C70] hover:bg-[#417166] text-[17px] border-2 p-1 px-3 border-[#159F7F]  rounded-[15px] text-white'>
              Print
            </button>
          </div>
        </div>
      </Modal>
      <div className='w-full px-[11px] lg:px-12 flex justify-between'>
        <Select options={option} defaultValue={{ value: 1, label: 'Unprocessed' }} instanceId='1' />
        {/* <Flatpickr value={date} className={'pl-[10px] outline-none rounded-[5px]'} /> */}
        <input type='text' defaultValue={f.format(date)} readOnly className={'outline-none rounded-[5px] p-[6px] text-gray-800  border-2'} />
      </div>
      <div className='w-full px-[11px] lg:px-12'>
        <div className='rounded-[6px] mt-4 h-[66vh] bg-white p-2 overflow-x-scroll '>
          <table className='w-full'>
            <thead>
              <tr className='bg-[#eeeeee]'>
                <th>No</th>
                <th>Kode Toko </th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Nomor SJ</th>
                <th>Tanggal SJ</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.kode_toko}</td>
                  <td>{item?.sales_name}</td>
                  <td>{item?.address}</td>
                  <td>{item?.nomor_sj}</td>
                  <td>{item?.date_sj}</td>
                  <td>
                    <p className={`border-2 bg-white rounded-[10px] ${item?.status ? 'text-[green]' : 'text-[#c4c431]'}`}>
                      {item?.status ? 'UnProcessed' : 'onProcessed'}
                    </p>
                  </td>
                  <td>
                    <button
                      className='bg-blue-700 text-white px-3 rounded-[10px]'
                      onClick={() => {
                        openDetail();
                        setItemDetail(item);
                      }}
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableWrapper;
