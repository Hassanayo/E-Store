import 'styled-components'
import colors from './colors'
import fontWeights from './fontWeights'

type ColorTokens = Partial<typeof colors>;
type FontWeightTokens = Partial<typeof fontWeights>

declare module "styled-components" {
    export interface DefaultTheme {
        colors?: ColorTokens
        fontWeights?: FontWeightTokens
    }
}
