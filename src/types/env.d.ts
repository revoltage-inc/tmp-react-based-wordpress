interface ImportMetaEnv extends Partial<Readonly<typeof import("../../.env")>> {
  // App
  readonly APP_VERSION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
