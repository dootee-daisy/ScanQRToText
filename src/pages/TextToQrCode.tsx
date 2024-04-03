import React, { useState, useEffect, useRef } from "react"
import QRCode from "qrcode"

const TextToQrCode = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const qrRef = useRef<HTMLCanvasElement | null>(null)

  const generateQR = async (text: string) => {
    try {
      if (qrRef.current !== null) {
        await QRCode.toCanvas(qrRef.current, text)
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    generateQR(inputValue)
  }, [inputValue])

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(event.target.value)
  }

  const downloadImage = () => {
    const link = document.createElement("a")
    link.download = "QRCode.png"
    if (qrRef.current !== null) {
      link.href = qrRef.current?.toDataURL()
      link.click()
    }
  }

  return (
    <div className='flex flex-col items-center QRCodeContainer'>
      <input
        className='min-w-[50vw] p-4 mt-6 outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 '
        onChange={handleInputChange}
        placeholder='Nhập văn bản cần chuyển đổi sang QR Code tại đây...'
      />
      <div className='h-auto max-w-full mb-6 '>
        <canvas ref={qrRef} />
      </div>
      <button
        className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        onClick={downloadImage}
      >
        Tải xuống
      </button>
    </div>
  )
}

export default TextToQrCode
