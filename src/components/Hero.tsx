import { Button } from './ui/button';
import { ImageCarousel } from './ImageCarousel';

interface HeroProps {
  onGetInvolvedClick?: () => void;
}

export function Hero({ onGetInvolvedClick }: HeroProps) {
  return (
    <section
      id="home"
      className="bg-[#050d1a] relative overflow-hidden min-h-screen flex flex-col -mt-16"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_34%),linear-gradient(135deg,_#030914_0%,_#06101b_40%,_#050d1a_100%)]"></div>

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 14% 20%, transparent 0 120px, rgba(120, 190, 255, 0.12) 122px, transparent 124px, transparent 166px, rgba(120, 190, 255, 0.08) 168px, transparent 170px),
              radial-gradient(circle at 86% 24%, transparent 0 132px, rgba(56, 189, 248, 0.10) 134px, transparent 136px, transparent 188px, rgba(56, 189, 248, 0.07) 190px, transparent 192px),
              radial-gradient(circle at 80% 78%, transparent 0 180px, rgba(59, 130, 246, 0.08) 182px, transparent 184px, transparent 232px, rgba(59, 130, 246, 0.05) 234px, transparent 236px)
            `,
          }}
        ></div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#60a5fa08_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa08_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-60"></div>

        <div className="absolute inset-x-0 top-[22%] h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent opacity-70"></div>
        <div className="absolute inset-x-0 top-[22%] h-16 bg-gradient-to-b from-cyan-300/6 to-transparent"></div>

        <div className="absolute left-[16%] top-[18%] w-72 h-72 rounded-full bg-cyan-300/4 blur-3xl"></div>
        <div className="absolute right-[8%] bottom-[12%] w-96 h-96 rounded-full bg-blue-400/4 blur-3xl"></div>

        <svg
          className="absolute inset-0 w-full h-full opacity-45"
          viewBox="0 0 1600 900"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="topoLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          <path d="M-40 215C136 142 298 121 448 151C602 181 735 252 896 242C1070 231 1224 125 1421 150C1518 162 1591 193 1650 225" stroke="url(#topoLine)" strokeWidth="2" />
          <path d="M-30 272C140 201 307 184 460 212C623 242 759 315 917 305C1092 293 1248 191 1446 219C1536 231 1600 259 1650 288" stroke="url(#topoLine)" strokeWidth="2" />
          <path d="M-10 332C150 271 321 259 481 286C634 312 792 388 943 383C1108 378 1260 296 1438 319C1529 331 1592 352 1648 382" stroke="url(#topoLine)" strokeWidth="2" />
          <path d="M10 400C165 356 319 348 477 373C637 398 774 466 934 466C1086 466 1255 412 1422 431C1511 441 1588 462 1655 493" stroke="url(#topoLine)" strokeWidth="2" />
          <path d="M-10 476C150 430 299 424 449 452C603 482 759 558 910 563C1068 568 1238 510 1418 534C1512 547 1588 573 1648 606" stroke="url(#topoLine)" strokeWidth="2" />
          <path d="M-30 560C118 514 268 510 424 541C583 571 733 642 886 649C1053 657 1212 602 1399 629C1493 643 1574 670 1645 705" stroke="url(#topoLine)" strokeWidth="2" />
          <path d="M-25 652C120 604 272 601 426 632C586 663 736 733 889 741C1049 749 1210 696 1398 723C1488 736 1576 767 1655 808" stroke="url(#topoLine)" strokeWidth="2" />

          <path d="M1110 132C1166 155 1216 193 1252 247C1288 301 1300 357 1293 422C1286 492 1253 553 1199 602C1154 643 1097 677 1027 691" stroke="#7dd3fc" strokeOpacity="0.18" strokeWidth="2" />
          <path d="M1151 162C1202 182 1246 218 1277 267C1309 318 1320 372 1313 431C1306 494 1277 550 1229 592C1188 629 1138 659 1079 673" stroke="#7dd3fc" strokeOpacity="0.14" strokeWidth="2" />
          <path d="M1192 192C1238 209 1275 241 1301 287C1327 333 1337 384 1330 438C1322 493 1297 543 1257 579C1222 611 1179 637 1132 649" stroke="#7dd3fc" strokeOpacity="0.12" strokeWidth="2" />

          <path d="M1066 252L1187 308L1246 421L1204 547L1097 620L973 616L872 545L836 429L885 317L980 255Z" stroke="#38bdf8" strokeOpacity="0.14" strokeWidth="1.5" />
          <path d="M885 317L1097 620" stroke="#38bdf8" strokeOpacity="0.12" strokeWidth="1.5" />
          <path d="M1187 308L973 616" stroke="#38bdf8" strokeOpacity="0.12" strokeWidth="1.5" />
          <path d="M836 429L1246 421" stroke="#38bdf8" strokeOpacity="0.1" strokeWidth="1.5" />

          <circle cx="973" cy="616" r="4" fill="#67e8f9" fillOpacity="0.45" />
          <circle cx="1187" cy="308" r="4" fill="#67e8f9" fillOpacity="0.4" />
          <circle cx="885" cy="317" r="3" fill="#67e8f9" fillOpacity="0.35" />
          <circle cx="1204" cy="547" r="3" fill="#67e8f9" fillOpacity="0.35" />
        </svg>

        <div className="absolute top-24 left-[10%] w-24 h-24 rounded-full border border-cyan-300/10"></div>
        <div className="absolute bottom-28 right-[10%] w-32 h-32 rounded-full border border-blue-400/10"></div>
        <div className="absolute top-1/3 right-[16%] w-2 h-2 rounded-full bg-cyan-300/60 shadow-[0_0_18px_rgba(103,232,249,0.28)]"></div>
        <div className="absolute bottom-1/4 left-[18%] w-2 h-2 rounded-full bg-blue-300/50 shadow-[0_0_18px_rgba(147,197,253,0.22)]"></div>
      </div>

      <div className="flex-1 flex items-center justify-center w-full relative z-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/NSC_Logo.png"
                alt="NSC Logo"
                style={{ width: '300px', height: '300px' }}
                className="mb-6"
              />
            </div>

            <h1 className="font-mono text-4xl md:text-6xl text-white text-center mb-2 m-0 tracking-tight">
              National Security Club
            </h1>
            <p className="text-xl md:text-3xl mb-6 md:mb-10 text-[#c2d5f4] max-w-3xl mx-auto m-0">
              Building Tomorrow's National Security Leaders
            </p>

            {onGetInvolvedClick && (
              <Button
                onClick={onGetInvolvedClick}
                className="bg-[#FA4616] hover:bg-[#c93d0e] text-white uppercase tracking-widest font-serif px-10 py-4 rounded-none shadow-md transition-colors duration-150"
              >
                Get Involved
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full">
        <ImageCarousel />
      </div>
    </section>
  );
}
