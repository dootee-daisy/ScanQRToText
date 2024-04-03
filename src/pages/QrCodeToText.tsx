import QrScanner from "qr-scanner"
import React, { ChangeEvent } from "react"

type resultScan = {
  data: string
}
const QrCodeToText = () => {
  const [result, setResult] = React.useState<string>("")
  const readCode = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null
    if (!file) return
    QrScanner.scanImage(file, {
      returnDetailedScanResult: true,
    })
      .then((rs: resultScan) => {
        setResult(rs.data)
      })
      .catch((e) => console.log(e.message()))
  }
  return (
    <>
      <input
        onChange={(
          e: React.ChangeEvent<HTMLInputElement>
        ) => readCode(e)}
        placeholder='Tải lên file QR Code'
        type='file'
        className='min-w-[50vw] mt-6 p-4 outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 '
      />
      <p className='mt-6'>
        Sau khi quét, văn bản sẽ xuất hiện bên dưới đây
      </p>
      <h1 className='mt-6 text-4xl'>{result}</h1>
    </>
  )
}

export default QrCodeToText
