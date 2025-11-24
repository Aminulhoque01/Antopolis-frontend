

import Image from "next/image";
import image from "../../../assets/image/team.jpg";
export default function TeamSection() {
  const members = [
    { name: "Mark Henry", role: "Owner", img: image },
    { name: "Lucky Helen", role: "Chef", img: image },
    { name: "Moon Henry", role: "Founder", img: image },
    { name: "Tom Morrow", role: "Specialist", img: image },
  ];

  return (
    <section className="w-full bg-white">
      {/* Top Banner */}
      <div className="w-full bg-[#AD1519D9]  h-[360px] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-2">Team Member</h2>
        <p className="max-w-xl mx-auto opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue.
        </p>
      </div>

      {/* Team Cards */}
      <div className="max-w-5xl mx-auto py-10 -mt-40 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 relative z-10">
        {members.map((m, i) => (
          <div
            key={i}
            className="border  flex flex-col items-center transition"
          >
            <div className="w-full h-52 relative overflow-hidden  ">
              <Image
                src={m.img}
                alt={m.name}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold mt-4">{m.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
