import type { Metadata } from "next";
// import Navbar from "./navbar";
import "./globals.css";
import "tailwindcss";
// import Footer_Component from "../component/footer";

export const metadata: Metadata = {
    title: "Tire",
    description: "Pick your tire",
};

// export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
//     return (
//         <html lang="en">
//         <body
//         >
//         <Navbar></Navbar>
//         {children}
//         <Footer_Component></Footer_Component>
//         </body>
//         </html>
//     );
// }
//[리액트와 넥스트]
// 1. 리액트
// 클라이언트 사이드 랜더링, 데이터 페칭 내장기능이 없어서 라이브러리 사용
// 2. 넥스트
// 서버 사이드 랜더링(SSR), 정적 사이트 생성(SSG), 클라이언트 사이드 랜더링(CSR) 지원
// getStaticProps, getServerSideProps와 같은 내장 함수로 데이터 페칭 가능

//[랜더링 방식]
// 1. 서버사이드렌더링 SSR
// 서버에서 HTML을 생성하여서 클라이언트에 전달
// 초기 로딩속도가 빠르고 seo에 유리
// 단점으로는 서버에 부하가 걸린다.

// 2. 정적사이트생성 SSG
// 빌드 시점에 미리 HTML을 생성하여서 클라이언트에 전달
// 초기 로딩속도가 빠르고 서버에 부하가 적다.
// 단점으로는 데이터가 변경될 경우 다시 빌드해야 한다.

// 3. 클라이언트사이드렌더링 CSR
// 클라이언트에서 JavaScript를 실행하여서 HTML을 생성
export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body
        >
        {children}
        </body>
        </html>
    );
}