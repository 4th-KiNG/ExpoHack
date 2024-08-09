import { ChangeEvent, useState } from 'react';
import { Title } from '../../shared/ui';
import userStore from '../../store/userStore';
import styles from './MainPage.module.scss'
import { funnel } from '../../assets';
import { Stage, Layer, Line } from 'react-konva';
import Diagram from '../../shared/components/Diagram/Diagram';

const MainPage = () => {
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        userStore.setPartner(e.target.value)
        localStorage.setItem("currPartner", e.target.value)
    }
    const [page, setPage] = useState<"funnel" | "diagram">("funnel")
    const [metric, setMetric] = useState<"sum" | "percent">("sum")
    const allSum = 1000
    return (
        <>
        <div className={styles.MainPage}>
            <div className={styles.MainPage_Header}>
                <Title content='Главная' />
                <div className={styles.MainPage_Header_Switcher}>
                    <select className={styles.LeadSelect} name="" id="" onChange={handleSelectChange}>
                        <option value="Экспобанк" selected={userStore.currPartner == "Экспобанк"}>Экспобанк</option>
                        <option value="Д2 страхование" selected={userStore.currPartner == "Д2 страхование"}>Д2 страхование</option>
                        <option value="Автоэкспресс" selected={userStore.currPartner == "Автоэкспресс"}>Автоэкспресс</option>
                        <option value="EXPOCAR" selected={userStore.currPartner == "EXPOCAR"}>EXPOCAR</option>
                        <option value="П-О Xвоя" selected={userStore.currPartner == "П-О Xвоя"}>Парк-отель хвоя</option>
                        <option value="Лизинг 1" selected={userStore.currPartner == "Лизинг 1"}>Лизинг 1</option>
                        <option value="Лизинг 2" selected={userStore.currPartner == "Лизинг 2"}>Лизинг 2</option>
                        <option value="Лизинг 3" selected={userStore.currPartner == "Лизинг 3"}>Лизинг 3</option>
                        <option value="Лизинг 4" selected={userStore.currPartner == "Лизинг 4"}>Лизинг 4</option>
                        <option value="Лизинг 5" selected={userStore.currPartner == "Лизинг 5"}>Лизинг 5</option>
                    </select>
                    <div className={styles.MetricSelect}>
                        <p
                            style={{
                                color: `${metric === "sum" ? "white" : "black"}`
                            }}
                            onClick={() => setMetric("sum")}
                        >
                            Сумма
                        </p>
                        <p
                            style={{
                                color: `${metric === "percent" ? "white" : "black"}`
                            }}
                            onClick={() => setMetric("percent")}
                        >
                            Процент
                        </p>
                        <div
                            className={styles.MetricSelect_Block}
                            style={{
                                left: `${metric === "sum" ? "0px" : "80px"}`,
                                width: `${metric === "sum" ? "85px" : "92px"}`,
                            }}
                        />
                    </div>
                </div>
                
            </div>
            <div className={styles.Page}>
                <nav className={styles.Page_NavPanel}>
                    <p
                        style={{
                            color: `${page === "funnel" ? "#FF8F32" : "#8E99A8"}`,
                            borderBottom: `5px ${page === "funnel" ? "#FF8F32" : "white"} solid`
                        }}
                        onClick={() => setPage("funnel")}
                    >
                        Воронка
                    </p>
                    <p
                        style={{
                            color: `${page === "diagram" ? "#FF8F32" : "#8E99A8"}`,
                            borderBottom: `5px ${page === "diagram" ? "#FF8F32" : "white"} solid`
                        }}
                        onClick={() => setPage("diagram")}
                    >
                        Источники лидов
                    </p>
                </nav>
                {page === "funnel" && 
                <>
                    <div className={styles.Funnel}>
                        <img className={styles.Funnel_Image} src={funnel} alt="" />
                        <div className={styles.Funnel_Stats}>
                            <p>Новое предложение - <span style={{fontWeight: "600"}}>{metric === "sum" ? allSum : `${100}%`}</span></p>
                            <p>Взято в работу - <span style={{fontWeight: "600"}}>{metric === "sum" ? allSum / 100 * 75 : `${75}%`}</span></p>
                            <p>Обсуждение условий - <span style={{fontWeight: "600"}}>{metric === "sum" ? allSum / 100 * 42 : `${42}%`}</span></p>
                            <p>Принимает решение - <span style={{fontWeight: "600"}}>{metric === "sum" ? allSum / 100 * 25 : `${25}%`}</span></p>
                            <p>Заключение сделки - <span style={{fontWeight: "600"}}>{metric === "sum" ? allSum / 100 * 10 : `${10}%`}</span></p>
                            <p>Сопровождение - <span style={{fontWeight: "600"}}>{metric === "sum" ? allSum / 100 * 5 : `${5}%`}</span></p>
                            <p>Завершение - <span style={{fontWeight: "600"}}>{metric === "sum" ? allSum / 100 * 1 : `${1}%`}</span></p>
                        </div>
                        <Stage style={{position: "absolute"}} width={1000} height={1000}>
                            <Layer>
                                <Line
                                points={[300, 315, 270, 315, 225, 340]} // координаты точек ломаной
                                stroke="#C5C5C5"
                                strokeWidth={1}
                                lineJoin="round"
                                />
                            </Layer>
                            <Layer>
                                <Line
                                points={[300, 375, 270, 375, 210, 430]} // координаты точек ломаной
                                stroke="#C5C5C5"
                                strokeWidth={1}
                                lineJoin="round"
                                />
                            </Layer>
                            <Layer>
                                <Line
                                points={[300, 440, 270, 440, 193, 520]} // координаты точек ломаной
                                stroke="#C5C5C5"
                                strokeWidth={1}
                                lineJoin="round"
                                />
                            </Layer>
                            <Layer>
                                <Line
                                points={[300, 500, 270, 500, 182, 590]} // координаты точек ломаной
                                stroke="#C5C5C5"
                                strokeWidth={1}
                                lineJoin="round"
                                />
                            </Layer>
                            <Layer>
                                <Line
                                points={[300, 562, 270, 562, 172, 640]} // координаты точек ломаной
                                stroke="#C5C5C5"
                                strokeWidth={1}
                                lineJoin="round"
                                />
                            </Layer>
                            <Layer>
                                <Line
                                points={[300, 625, 270, 625, 166, 680]} // координаты точек ломаной
                                stroke="#C5C5C5"
                                strokeWidth={1}
                                lineJoin="round"
                                />
                            </Layer>
                            <Layer>
                                <Line
                                points={[300, 685, 270, 685, 160, 705]} // координаты точек ломаной
                                stroke="#C5C5C5"
                                strokeWidth={1}
                                lineJoin="round"
                                />
                            </Layer>
                        </Stage>
                        <div className={styles.Funnel_Sum}>
                            <div className={styles.Funnel_Sum_Elem}>
                                <p>Сумма сделок</p>
                                <span>1133</span>
                            </div>
                            <div className={styles.Funnel_Sum_Elem}>
                                <p>Сумма завершенных сделок</p>
                                <span>1133</span>
                            </div>
                            <div className={styles.Funnel_Sum_Elem}>
                                <p>Сумма сделок в работе</p>
                                <span>1133</span>
                            </div>
                        </div>
                    </div>
                </>
                }
                {page === "diagram" &&
                <>
                <Diagram />
                </>
                }
            </div>
        </div>
        </>
    );
}
 
export default MainPage;