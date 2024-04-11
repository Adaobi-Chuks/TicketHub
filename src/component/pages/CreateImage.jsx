import React, { useState } from 'react';
import IMG from '../../assets/bg_image.png';
import IMG1 from '../../assets/ima.png';
import { useNavigate } from 'react-router-dom';

const CreateImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className='absolute bottom-0 right-0'>
        <img src={IMG} className='w-[30rem] h-[20rem]' alt='Background Image' />
      </div>

      <div className="flex sm:flex-row items-center justify-center mx-20">
        <div className='mx-auto grid sm:flex-rows-2 justify-center items-center'>
          <div className='bg-[#142D8E30] mt-[8rem] justify-center items-center w-[40rem] h-[35rem] px-20 py-7 rounded-md'>
            <div className='flex justify-end '>
              <div className='flex gap-2 text-end'>
                <button onClick={() => navigate('/CreateSocial')} className='bg-white text-md text-[#0D2986] rounded-md px-3 py-1'>Cancel</button>
                <button onClick={() => navigate('/EventSummary')} className='bg-[#0D2986] text-md text-[#fff] rounded-md px-4 py-1'>Save</button>
              </div>
            </div>

            <div className='flex mt-[5rem]'>
              <div className='bg-[#142D8E30] justify-center items-center w-[35rem] h-[15rem] rounded-md '>
                {selectedImage ? (
                  <div className='grid justify-center items-center mt-[5rem] gap-2'>
                    <div className='flex justify-center items-center'>
                      <img src={selectedImage} className='max-w-full max-h-full cursor-pointer' alt='Selected Image' onClick={handleCloseImage} />
                    </div>
                  </div>
                ) : (
                  <div className='grid justify-center items-center mt-[5rem] gap-2'>
                    <div className='flex justify-center items-center'>
                      <img src={IMG1} onClick={handleIconClick} className='w-[3rem] h-[2.5rem] flex justify-center items-center' alt='Upload Icon' />
                    </div>

                    <div className='flex gap-1'>
                      <p className='text-[white] text-xs'>Drag an image here or click to</p>
                      <input type='file' id='fileInput' style={{ display: 'none', height:'15rem',width:'15rem' }} onChange={handleImageChange} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateImage;
