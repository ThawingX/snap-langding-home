import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Hero() {
  const [showQRCode, setShowQRCode] = useState(false)

  const handleExperienceClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    if (isMobile) {
      // 微信小程序路径，需要替换成实际的路径
      // window.location.href = 'weixin://dl/business/?t=wx77ab08d4e6c6e0fc'
      setShowQRCode(true)
    } else {
      setShowQRCode(true)
    }
  }

  return (
    <div className="relative isolate pt-14">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-primary-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>

      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <SparklesIcon className="mr-1 inline-block h-4 w-4 animate-pulse text-primary-500" />
                探索AI摄影的无限可能
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              让AI为你的摄影创作赋能
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Snap Snap是您的智能摄影助手，集成了先进的AI技术，为摄影师和创作者提供智能工具集。从构图指导到后期处理，让每一张照片都焕发独特魅力。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="btn btn-primary group" onClick={handleExperienceClick}>
                立即体验
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#features" className="btn btn-secondary">
                了解更多
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>
      
      {/* 二维码模态框 */}
      {showQRCode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setShowQRCode(false)}>
          <div className="relative rounded-lg bg-white p-6" onClick={e => e.stopPropagation()}>
            <img src="https://snapsnap-1326850801.cos.ap-guangzhou.myqcloud.com/微信小程序二维码.png" alt="小程序二维码" className="h-64 w-64" />
            <p className="mt-4 text-center text-gray-600">请使用微信扫码进入小程序</p>
          </div>
        </div>
      )}
    </div>
  )
}