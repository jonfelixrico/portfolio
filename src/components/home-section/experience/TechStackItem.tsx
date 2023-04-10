import { ConditionallyRender } from '@/components/ConditionallyRender'
import IconWithTooltip from '@/components/IconWithTooltip'
import Image from 'next/image'

interface TechSubItem {
  iconSrc: string
  name: string
  iconClass?: string
}

interface TechItem {
  iconSrc: string
  name: string
  testimony: string
  items?: TechSubItem[]
  iconClass?: string
}

export type TechStackItemProps = TechItem

function SubItem(props: TechSubItem) {
  return (
    <IconWithTooltip
      tooltipLabel={props.name}
      src={props.iconSrc}
      iconClass={props.iconClass}
      className="h-6 w-6"
    />
  )
}

export default function TechStackItem(props: TechStackItemProps) {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="relative">
        <Image
          alt={`Icon of ${props.name}`}
          src={props.iconSrc}
          fill
          className={props.iconClass}
        />
      </div>
      <div className="col-span-11 flex flex-row justify-between items-center">
        <div className="text-xl font-semibold">{props.name}</div>

        <ConditionallyRender render={!!props.items?.length}>
          <div className="flex flex-row gap-1 items-center">
            {props.items?.map((item) => (
              <SubItem
                iconSrc={item.iconSrc}
                name={item.name}
                key={item.name}
                iconClass={item.iconClass}
              />
            ))}
          </div>
        </ConditionallyRender>
      </div>

      <div className="col-start-2 col-span-11 text-md">{props.testimony}</div>
    </div>
  )
}
