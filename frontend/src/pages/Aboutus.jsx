import React from 'react'
import { useState, useEffect } from 'react'

function Aboutus() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.screen.width < 640) {
      setIsMobile(true)
    }
  }, [])

  return (
    <>
      <div className='text-center text-3xl font-medium pt-3 mb-14 border-t border-gray-200'>Thông tin về chúng tôi</div>
      <div className='text-center text-2xl font-medium mb-5'>Chúng tôi là ai?</div>
      <div className={`${isMobile ? 'px-2' : 'px-56'} mb-5 text-center`}>
        Chào mừng đến với BKoolers - nơi mà phong cách nam tính và đẳng cấp gặp gỡ. Chúng tôi là một thương hiệu thời trang nam đang nổi lên với sứ mệnh đem lại sự tự tin và phong cách cho phái mạnh.
      </div>
      <img className={`m-auto mb-10 ${isMobile ? 'px-3' : 'w-2/3'}`} src="https://i.pinimg.com/originals/91/98/8e/91988e5d06043042a36b6b128318b99e.jpg" alt="" />
      <div className='text-center text-2xl font-medium mb-5'>Chúng tôi làm gì?</div>
      <div className={`${isMobile ? 'px-2' : 'px-56'} mb-5 text-center`}>
      Tại BKoolers, chúng tôi không chỉ là một thương hiệu thời trang, mà còn là người bạn đồng hành tin cậy của các quý ông trong hành trình chinh phục phong cách cá nhân. Chúng tôi tôn trọng và hiểu rõ sự đa dạng của phong cách nam giới, từ phong cách lịch lãm và cổ điển đến sự hiện đại và cá tính. Với mỗi sản phẩm được thiết kế tỉ mỉ và chăm chút, chúng tôi cam kết mang lại sự thoải mái và sự tự tin tối đa cho mỗi quý ông.
      </div>
      <img className={`m-auto mb-10 ${isMobile ? 'px-3' : 'w-2/3'}`} src="https://www.thefashionisto.com/wp-content/uploads/2015/10/Gap-GQ-Best-New-Menswear-America-2015-Shoot-001.jpg" alt="" />
      <div className='text-center text-2xl font-medium mb-5'>Chúng tôi mong muốn điều gì?</div>
      <div className={`${isMobile ? 'px-2' : 'px-56'} mb-5 text-center`}>
      Chúng tôi rất vinh dự được phục vụ và làm hài lòng các quý ông, và chúng tôi hy vọng rằng bạn sẽ cảm thấy tự tin và phong cách mỗi khi lựa chọn sản phẩm của chúng tôi. Hãy cùng BKoolers trải nghiệm cuộc sống đẳng cấp và đầy phong cách!
      </div>
      <img className={`m-auto mb-10 ${isMobile ? 'px-3' : 'w-2/3'}`} src="https://i.pinimg.com/originals/39/8f/38/398f38c09a7035d72af3d0ea44fc4129.jpg" alt="" />
    </>
  )
}

export default Aboutus