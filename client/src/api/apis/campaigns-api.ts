/* tslint:disable */
/* eslint-disable */
/**
 * Sparely API
 * API for Sparely
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * CampaignsApi - axios parameter creator
 * @export
 */
export const CampaignsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        campaignsControllerFindAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/campaigns`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} slug Id of the campaign
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        campaignsControllerFindOne: async (slug: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            if (slug === null || slug === undefined) {
                throw new RequiredError('slug','Required parameter slug was null or undefined when calling campaignsControllerFindOne.');
            }
            const localVarPath = `/campaigns/{slug}`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CampaignsApi - functional programming interface
 * @export
 */
export const CampaignsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async campaignsControllerFindAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await CampaignsApiAxiosParamCreator(configuration).campaignsControllerFindAll(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} slug Id of the campaign
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async campaignsControllerFindOne(slug: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await CampaignsApiAxiosParamCreator(configuration).campaignsControllerFindOne(slug, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CampaignsApi - factory interface
 * @export
 */
export const CampaignsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async campaignsControllerFindAll(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return CampaignsApiFp(configuration).campaignsControllerFindAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} slug Id of the campaign
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async campaignsControllerFindOne(slug: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return CampaignsApiFp(configuration).campaignsControllerFindOne(slug, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CampaignsApi - object-oriented interface
 * @export
 * @class CampaignsApi
 * @extends {BaseAPI}
 */
export class CampaignsApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CampaignsApi
     */
    public async campaignsControllerFindAll(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return CampaignsApiFp(this.configuration).campaignsControllerFindAll(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} slug Id of the campaign
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CampaignsApi
     */
    public async campaignsControllerFindOne(slug: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return CampaignsApiFp(this.configuration).campaignsControllerFindOne(slug, options).then((request) => request(this.axios, this.basePath));
    }
}