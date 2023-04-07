import styles from "../styles";
import { clients } from "../constants";

const Clients = () => (
  <section className={` my-4 ${styles.flexCenter}`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id}
        className={` ${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
          <img src={client.logo} alt={client.logo} 
          className={`sm:w-[192px] w-[100px] object-contain`}/>
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
