import React from "react"
import QRCode from "react-qr-code"
const TextToQrCode = () => {
  const [inputValue, setInputValue] =
    React.useState<string>("")
  //Tạo hàm download
  const downloadImage = () => {
    const svg = document.getElementById("QRCode")
    if (svg instanceof SVGSVGElement) {
      const svgData: string =
        new XMLSerializer().serializeToString(svg)
      const canvas: HTMLCanvasElement =
        document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      const img: HTMLImageElement = new Image()
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx != null && ctx.drawImage(img, 0, 0)
        const pngFile = canvas.toDataURL("image/png")
        const link = document.createElement("a")

        //Đặt tên cho ảnh
        link.download = "QRCode"
        link.href = `${pngFile}`
        link.click()
      }
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`
    }
  }
  return (
    <>
      <div className='my-6'>
        <label
          htmlFor='vanBanInput'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Large input
        </label>
        <input
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) => setInputValue(e.target.value)}
          type='text'
          id='vanBanInput'
          placeholder='Nhập văn bản cần chuyển đổi sang QR Code tại đây...'
          className='min-w-[50vw] p-4 outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 '
        />
      </div>
      <div className='flex flex-col items-center'>
        <div>
          <h3 className='mb-6'>QR Code được tạo tại đây</h3>
        </div>
        <QRCode
          id='QRCode'
          size={256}
          className='mb-6 h-auto max-w-full w-[200px]'
          value={inputValue}
          viewBox={`0 0 256 256`}
        />
        <button
          onClick={downloadImage}
          type='button'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        >
          Tải xuống
        </button>
      </div>
    </>
  )
}

export default TextToQrCode
