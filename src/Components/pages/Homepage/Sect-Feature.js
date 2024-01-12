import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import image10 from '../../Assets/image10.png';

const features = [
  {
    name: 'Online Data Captures and Education Information Confluence:',
    description:
      'KEMIS provides a seamless online data capture experience, bringing together a wealth of education information in one central hub.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Shared Data Repository:',
    description: 'A collaborative space for education institutions, agencies, and partners to access and contribute to a shared data repository.',
    icon: LockClosedIcon,
  },
  {
    name: 'Business Intelligence for Educational Insights:',
    description: 'Leverage the power of business intelligence tools to generate comprehensive reports on both national and international educational trends.',
    icon: ServerIcon,
  },
  {
    name: 'Flexible Management Tool:',
    description:
      'KEMIS serves as a flexible management tool, allowing efficient tracking of learning resources and school infrastructure.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Cost-Finance Parameter Tracking:',
    description: 'Our platform offers in-depth tracking of media for cost-finance parameters in education and training, ensuring transparency and efficiency.',
    icon: LockClosedIcon,
  },
  {
    name: 'Geo Mapping and Performance Analysis:',
    description: 'Utilize our geo-mapping feature to locate and analyze education institutions, coupled with insightful performance indicators.',
    icon: ServerIcon,
  },
]

export default function SectFeature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Single Source of Truth.</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Key Features:</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              KEMIS, Streamlining Education Sector’s Data Management for effective Planning, Reporting and Decision Making.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={image10}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1800}
          />
        </div>
      </div>
    </div>
  )
}
