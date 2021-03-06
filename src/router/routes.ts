import { SettingsPage } from "~pages/settings"
import { TestPage } from "~pages/test"
import { ExplorerPage } from "~pages/explorer"

type RouteConfig = {
  pattern: RegExp
  page: () => HTMLElement
}

export const ROUTES: readonly RouteConfig[] = [
  {
    pattern: /^settings$/,
    page: SettingsPage,
  },
  {
    pattern: /^test$/,
    page: TestPage,
  },
  {
    pattern: /.*/,
    page: ExplorerPage,
  },
]
