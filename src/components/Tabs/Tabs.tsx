import { ReactNode, useState } from "react"
import { ButtonTab } from "./style"
import { Display } from "../../style/style"

type FormTabsProps = {
	tabs: string[]
	children: ReactNode[]
}

export default function Tabs({tabs,children}: FormTabsProps) : JSX.Element{

	const [activeIndex, setActiveIndex] = useState(0)

    return(
        <>
            <Display>
                {tabs.map((content, index) =>
                    <ButtonTab
                        $actived={activeIndex === index}
                        key={"tab" + index}
                        onClick={() => setActiveIndex(index)}
                    >
                        {content}
                    </ButtonTab>
                )}
            </Display>
            <form onSubmit={e => e.preventDefault()}>
				{children.map((children, index) => activeIndex === index && children)}
			</form>
        </>
    )
}