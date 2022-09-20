package com.mindstone.backend.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

/**
 * The class ResponseJson.
 *
 * @param <T> the type parameter
 */
@Getter
@Setter
@AllArgsConstructor
public class ResponseJson<T> {

    private static final String DEFAULT_MSG = "Success";
    private static final int DEFAULT_CODE = HttpStatus.OK.value();

    private int statusCode;
    private String message;
    private T data;
    private MetaData metaData;

    /**
     * Instantiate a new ResponseJson.
     */
    public ResponseJson() {
        this.setStatusCode(DEFAULT_CODE);
        this.setMessage(DEFAULT_MSG);
    }

    /**
     * Instantiate a new ResponseJson.
     *
     * @param statusCode the status code
     * @param message    the message
     */
    public ResponseJson(int statusCode, String message) {
        this.setStatusCode(statusCode);
        this.setMessage(message);
    }


    /**
     * Instantiate a new ResponseJson.
     *
     * @param t the data
     */
    public ResponseJson(T t) {
        this();
        this.data = t;
    }

    /**
     * Instantiate a new ResponseJson.
     *
     * @param t        the data
     * @param metaData the meta data
     */
    public ResponseJson(T t, MetaData metaData) {
        this();
        this.data = t;
        this.metaData = metaData;
    }

    /**
     * Build response ResponseJson.
     *
     * @param <T>      the type parameter
     * @param t        the data
     * @param metaData the meta data
     * @return the ResponseJson<T>
     */
    public static <T> ResponseJson<T> buildResponse(T t, MetaData metaData) {
        return new ResponseJson<T>(t, metaData);
    }

    /**
     * Build response ResponseJson.
     *
     * @param <T>        the type parameter
     * @param statusCode the status code
     * @param t          the data
     * @param metaData   the meta data
     * @return the ResponseJson<T>
     */
    public static <T> ResponseJson<T> buildResponse(int statusCode, T t, MetaData metaData) {
        ResponseJson<T> response = new ResponseJson<>(t, metaData);
        response.setStatusCode(statusCode);
        return response;
    }

    /**
     * Build response ResponseJson.
     *
     * @param <T>        the type parameter
     * @param statusCode the status code
     * @param message    the message
     * @param t          the data
     * @param metaData   the meta data
     * @return the ResponseJson<T>
     */
    public static <T> ResponseJson<T> buildResponse(int statusCode, String message, T t, MetaData metaData) {
        ResponseJson<T> response = new ResponseJson<>(statusCode, message);
        response.setData(t);
        response.setMetaData(metaData);
        return response;
    }

    /**
     * Build response ResponseJson.
     *
     * @param <T> the type parameter
     * @param t   the data
     * @return the ResponseJson<T>
     */
    public static <T> ResponseJson<T> buildResponse(T t) {
        return new ResponseJson<T>(t);
    }

    /**
     * Build response ResponseJson.
     *
     * @param statusCode the status code
     * @param message    the message
     * @return the ResponseJson
     */
    public static <T> ResponseJson<T> buildResponse(int statusCode, String message) {
        return new ResponseJson<>(statusCode, message);
    }

    /**
     * Get default ResponseJson.
     *
     * @return the ResponseJson
     */
    public static <T> ResponseJson<T> getInstance() {
        return new ResponseJson<>();
    }

}
