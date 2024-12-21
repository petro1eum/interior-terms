import { designStages } from './designStages'
import { supervisionStages } from './supervisionStages'
import { constructionStages } from './constructionStages'
import { implementationStages } from './implementationStages'

export const projectStages = {
  ...designStages,        // EBD, EPD, EFD
  ...supervisionStages,   // FCA, FCS, FCM
  ...constructionStages,  // CBO, CPT, CIP
  ...implementationStages // DAP, DFU, DFP
} 