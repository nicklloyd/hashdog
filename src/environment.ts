type Environment = {
  secretMessage: string
  enableIntrospection: boolean
}

export const environment: Environment = {
  secretMessage: process.env.SECRET_MESSAGE as string,
  enableIntrospection: process.env.STAGE != 'production'
}
