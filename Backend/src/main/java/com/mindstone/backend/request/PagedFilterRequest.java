package com.mindstone.backend.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Min;

@Getter
@Setter
public class PagedFilterRequest {
    @Min(value = 1, message = "Số lượng mỗi trang phải lớn hơn 0")
    private int pageSize;

    @Min(value = 1, message = "Số trang phải lớn hơn 0")
    private int pageNumber;

    public PagedFilterRequest() {
        pageSize = 10;
        pageNumber = 1;
    }
}
