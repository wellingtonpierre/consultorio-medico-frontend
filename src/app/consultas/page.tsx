import ConsultationsList from "@/features/consultas/components/ConsultationsList";
import { Metadata } from "next";

import styles from './styles.module.css'

export const metadata: Metadata = {
    title: "Consultas"
}

export default async function ConsultasPage() {
    return (
        <div className={styles.container}>
            <h1>Consultas</h1>
            <ConsultationsList />
        </div>
    )
}
