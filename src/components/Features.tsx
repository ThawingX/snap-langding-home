import { CameraIcon, SparklesIcon, PhotoIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'AI构图指导',
    description: '实时分析场景，提供专业的构图建议，帮助您捕捉最完美的瞬间。',
    icon: CameraIcon,
  },
  {
    name: '智能后期处理',
    description: '运用先进的AI算法，自动优化照片的色彩、光线和细节，让每张照片都焕发生机。',
    icon: SparklesIcon,
  },
  {
    name: '场景识别优化',
    description: '智能识别拍摄场景，自动调整相机参数，确保在任何条件下都能拍出理想照片。',
    icon: PhotoIcon,
  },
  {
    name: '个性化创作工具',
    description: '提供丰富的滤镜和编辑工具，结合AI技术，让您轻松创作独特的艺术作品。',
    icon: AdjustmentsHorizontalIcon,
  },
]

export default function Features() {
  return (
    <div id="features" className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">强大功能</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">为您的摄影之旅提供智能助力</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            集成先进的AI技术，为您提供全方位的摄影解决方案，从拍摄前的准备到后期处理，让创作过程更加轻松愉悦。
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col rounded-2xl bg-white p-6 shadow-soft hover:shadow-lg transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}