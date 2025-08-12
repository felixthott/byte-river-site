import { PortableTextComponents } from '@portabletext/react'

export const components: PortableTextComponents = {
  block: {
    h2: ({children}) => <h2 className="text-2xl font-semibold mt-8">{children}</h2>
  }
}
