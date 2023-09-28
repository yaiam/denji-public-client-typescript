import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ApiApiPublicConsentAcceptRequest } from '../models/ApiApiPublicConsentAcceptRequest';
import { ApiApiPublicConsentRejectRequest } from '../models/ApiApiPublicConsentRejectRequest';

import { ConsentApiRequestFactory, ConsentApiResponseProcessor} from "../apis/ConsentApi";
export class ObservableConsentApi {
    private requestFactory: ConsentApiRequestFactory;
    private responseProcessor: ConsentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConsentApiRequestFactory,
        responseProcessor?: ConsentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConsentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConsentApiResponseProcessor();
    }

    /**
     * @param apiApiPublicConsentAcceptRequest 
     */
    public apiPublicConsentAcceptPostWithHttpInfo(apiApiPublicConsentAcceptRequest?: ApiApiPublicConsentAcceptRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiPublicConsentAcceptPost(apiApiPublicConsentAcceptRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPublicConsentAcceptPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param apiApiPublicConsentAcceptRequest 
     */
    public apiPublicConsentAcceptPost(apiApiPublicConsentAcceptRequest?: ApiApiPublicConsentAcceptRequest, _options?: Configuration): Observable<void> {
        return this.apiPublicConsentAcceptPostWithHttpInfo(apiApiPublicConsentAcceptRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param consentRequestId 
     */
    public apiPublicConsentGetWithHttpInfo(consentRequestId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiPublicConsentGet(consentRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPublicConsentGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param consentRequestId 
     */
    public apiPublicConsentGet(consentRequestId?: string, _options?: Configuration): Observable<void> {
        return this.apiPublicConsentGetWithHttpInfo(consentRequestId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param apiApiPublicConsentRejectRequest 
     */
    public apiPublicConsentRejectPostWithHttpInfo(apiApiPublicConsentRejectRequest?: ApiApiPublicConsentRejectRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiPublicConsentRejectPost(apiApiPublicConsentRejectRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPublicConsentRejectPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param apiApiPublicConsentRejectRequest 
     */
    public apiPublicConsentRejectPost(apiApiPublicConsentRejectRequest?: ApiApiPublicConsentRejectRequest, _options?: Configuration): Observable<void> {
        return this.apiPublicConsentRejectPostWithHttpInfo(apiApiPublicConsentRejectRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
