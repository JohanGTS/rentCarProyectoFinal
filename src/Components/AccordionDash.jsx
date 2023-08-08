import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  ReporteOrdenesRecientesDashboard,
  ReporteOrdenesXEntregarDashboard,
} from "../Pages/reportes";

export default function AccordionDash() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Ultimas Ordenes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReporteOrdenesRecientesDashboard />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Ordenes para entregar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReporteOrdenesXEntregarDashboard />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Manual de Usuario</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a
              href="http://localhost:5173/src/assets/Propuestaproyecto.pdf"
              target="_blank"
            >
              Abrir Manual de Usuario
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
}
