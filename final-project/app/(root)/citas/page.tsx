import CitaCard from "@/components/shared/CitaCard";
import { citas } from "@/constants";

// All Citas Page for a specific user
const CitasPage = () => {
  return (
    <div>
      <h1>CitasPage</h1>
      <div className="grid grid-cols-2 gap-10">
        {citas.map((cita) => (
          <CitaCard key={cita.id} title={cita.title} description={cita.description} date={cita.date}/>
        ))}
      </div>
    </div>
  );
};

export default CitasPage;
