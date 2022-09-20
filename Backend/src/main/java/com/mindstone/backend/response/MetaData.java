package com.mindstone.backend.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MetaData {
    private long totalCount;
    private int pageSize;
    private int currentPage;
    private int totalPage;
    private boolean hasNextPage;
    private boolean hasPrevPage;
    private Integer prevPage;
    private Integer nextPage;

    public MetaData(int currentPage, int pageSize, int totalPage, long totalCount) {
        // From pageable, currentPage will start from 0, so we need to add 1
        currentPage++;
        this.totalCount = totalCount;
        this.pageSize = pageSize;
        this.currentPage = currentPage;
        this.totalPage = totalPage;
        this.hasPrevPage = currentPage > 1;
        this.hasNextPage = currentPage < totalPage;
        this.prevPage = hasPrevPage ? currentPage - 1 : null;
        this.nextPage = hasNextPage ? currentPage + 1 : null;
    }
}