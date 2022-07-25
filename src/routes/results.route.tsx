/** @jsx h */
import { h, JSX } from 'preact'
import { DateTime } from 'luxon';
import { useRouter } from "preact-router";
import { useEffect, useState } from 'preact/hooks';
import * as styles from './results.module.less';
import CardList from '../components/cardList.component';
import FetchHandles from '../components/fetchHandles.component';
import FilterComponent from '../components/filter.component';
import SearchComponent from '../components/search.component';
import { doRequest } from '../services/http.service';
import { BookingRequest, BookingResponse } from '../types/booking';

export default function ResultsRoute(): JSX.Element {
    const [data, setData] = useState({} as any)
    const [defaultResults, setDefaultResults] = useState({} as any)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [noResults, setNoResults] = useState(false);
    const [searchParams] = useRouter();

    useEffect(() => {
        const departureDate = DateTime.fromFormat(searchParams?.matches?.departureDate, "yyyy-MM-dd").toFormat("dd-MM-yyyy");
        const requestBody: BookingRequest = {
            "bookingType": "holiday",
            "location": searchParams?.matches?.location,
            "departureDate": departureDate,
            "duration": searchParams?.matches?.duration as unknown as number,
            "gateway": "LHR",
            "partyCompositions": [
                {
                    "adults": searchParams?.matches?.adults as unknown as number,
                    "childAges": [],
                    "infants": 0
                }
            ]
        }
        setLoading(true)
        doRequest('POST', '/cjs-search-api/search', requestBody)
            .then((response: unknown | BookingResponse) => {
                setData(response?.holidays)
                setDefaultResults(response?.holidays)
                setLoading(false)
            }).catch(error => setError(error))
    }, [searchParams])

    return (
        <div>
            <section>
                <SearchComponent />
            </section>
            <FetchHandles loading={loading} error={error} />
            {!loading && <main className={styles['main-content']}>
                <aside>
                    <FilterComponent setData={setData} setNoResults={setNoResults} data={data} defaultResults={defaultResults.length && defaultResults} />
                </aside>
                <section>
                    <h1>{data.length} holidays found</h1>
                    {noResults ? <p>Unselect some of your filters to see more results </p> : <CardList data={data.length && data} />}
                </section>
            </main>}
        </div>
    )
}