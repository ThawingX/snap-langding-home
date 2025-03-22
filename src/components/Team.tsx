import { UserIcon, CameraIcon, SparklesIcon } from '@heroicons/react/24/outline'

const team = [
  {
    name: 'Dylan Long',
    role: '联合创始人 & 产品',
    description: '深谙用户体验设计，擅长将复杂的技术转化为直观的产品功能。',
    icon: UserIcon,
  },
  {
    name: '林彦旭',
    role: '联合创始人 & 首席技术',
    description: '拥有多年AI研发背景，致力于将AI技术与摄影艺术完美结合。',
    icon: CameraIcon,
  },
]

export default function Team() {
  return (
    <div id="team" className="py-24 sm:py-32 bg-gray-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">团队介绍</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">由热爱摄影的工程师组成的创新团队</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我们是一群热爱摄影和技术的创新者，致力于用AI技术改变摄影创作的方式，让每个人都能轻松创作出专业级的作品。
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-4 rounded-full bg-primary-100/50 blur-lg" />
                  <div className="relative h-24 w-24 rounded-full bg-primary-50 p-4 shadow-soft">
                    <member.icon className="h-full w-full text-primary-600" aria-hidden="true" />
                  </div>
                </div>
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {member.name}
                </dt>
                <dd className="text-sm text-primary-600 mb-3">
                  {member.role}
                </dd>
                <dd className="text-base leading-7 text-gray-600">
                  {member.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}