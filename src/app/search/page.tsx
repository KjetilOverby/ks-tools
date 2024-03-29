// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { api } from "~/trpc/server";
import HeaderComponent from "../_components/HeaderComponent";
import SearchMain from "../_components/search/SearchMain";
import { getServerAuthSession } from "~/server/auth";
import OsterdalMain from "../_components/search/customers/osterdal/OsterdalMain";
import MjosMain from "../_components/search/customers/mjos/MjosMain";

interface dateProps {
  searchParams: {
    date: string;
    date2: string;
    serial: string;
  };
}

const page = async ({ searchParams }: dateProps) => {
  const session = await getServerAuthSession();
  let date1 = "2035-12-12";
  let date2 = "2023-12-05";
  let serial = "";

  if (searchParams.date) {
    date1 = searchParams.date;
    date2 = searchParams.date2;
    serial = searchParams.serial;
  }

  const sawblades = await api.sawblades.getAll.query({
    date: date1,
    date2: date2,
    IdNummer: serial,
  });

  const deletedSawblades = await api.sawblades.getAllDeleted.query({
    date: date1,
    date2: date2,
    IdNummer: serial,
  });

  const sawbladeOsterdal = await api.sawblades.getCustomer.query({
    date: date1,
    date2: date2,
    IdNummer: serial,
    init: "MØ",
  });
  const sawbladeOsterdalDeleted =
    await api.sawblades.getCustomerAllDeleted.query({
      date: date1,
      date2: date2,
      IdNummer: serial,
      init: "MØ",
    });
  const sawbladeOsterdalActive = await api.sawblades.getCustomerActive.query({
    date: date1,
    date2: date2,
    IdNummer: serial,
    init: "MØ",
  });
  const sawbladeMjos = await api.sawblades.getCustomer.query({
    date: date1,
    date2: date2,
    IdNummer: serial,
    init: "MM",
  });
  const sawbladeMjosDeleted = await api.sawblades.getCustomerAllDeleted.query({
    date: date1,
    date2: date2,
    IdNummer: serial,
    init: "MM",
  });
  const sawbladeMjosActive = await api.sawblades.getCustomerActive.query({
    date: date1,
    date2: date2,
    IdNummer: serial,
    init: "MM",
  });

  console.log(searchParams);

  return (
    <div>
      <HeaderComponent />
      <div className="m-5">
        {session && session?.user.role === "ADMIN" && (
          <SearchMain
            sawblades={sawblades}
            deletedSawblades={deletedSawblades}
            // params={searchParams}
            // date={date1}
            // date2={date2}
          />
        )}
        {session && session?.user.role === "MO_ADMIN" && (
          <OsterdalMain
            sawblades={sawbladeOsterdal}
            deletedSawblades={sawbladeOsterdalDeleted}
            activeBlades={sawbladeOsterdalActive}
          />
        )}
        {session && session?.user.role === "MM_ADMIN" && (
          <MjosMain
            sawblades={sawbladeMjos}
            deletedSawblades={sawbladeMjosDeleted}
            activeBlades={sawbladeMjosActive}
          />
        )}
      </div>
    </div>
  );
};

export default page;
