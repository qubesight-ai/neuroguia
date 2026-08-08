import { amistadExtra } from "./amistad";
import { chatExtra } from "./chat";
import { conflictosExtra } from "./conflictos";
import { coqueteoExtra } from "./coqueteo";
import { espaciosPublicosExtra } from "./espacios-publicos";
import { estudioExtra } from "./estudio";
import { familiaExtra } from "./familia";
import { iniciarConversacionExtra } from "./iniciar-conversacion";
import { limitesExtra } from "./limites";
import { mantenerConversacionExtra } from "./mantener-conversacion";
import { parejaCitasExtra } from "./pareja-citas";
import { redesSocialesExtra } from "./redes-sociales";
import { reunionesExtra } from "./reuniones";
import { terminarConversacionExtra } from "./terminar-conversacion";
import { trabajoExtra } from "./trabajo";

import type { Situacion } from "../situaciones";

export const situacionesExtra: Situacion[] = [
  ...amistadExtra,
  ...chatExtra,
  ...conflictosExtra,
  ...coqueteoExtra,
  ...espaciosPublicosExtra,
  ...estudioExtra,
  ...familiaExtra,
  ...iniciarConversacionExtra,
  ...limitesExtra,
  ...mantenerConversacionExtra,
  ...parejaCitasExtra,
  ...redesSocialesExtra,
  ...reunionesExtra,
  ...terminarConversacionExtra,
  ...trabajoExtra,
];
