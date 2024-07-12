"use client";

import { toast } from "sonner";
import { useEffect, useState } from "react";
// import { DragDropContext, Droppable } from "@hello-pangea/dnd";

// import { ListForm } from "./list-form";
// import { ListItem } from "./list_item";

import { useAction } from "@/hooks/use-action";
import { ListWithCards } from "@/types";
import { ListForm } from "./list-form";
// import { updateListOrder } from "@/actions/update-list-order";
// import { updateCardOrder } from "@/actions/update-card-order";

interface ListContainerProps {
    data: ListWithCards[];
    boardId: string;
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => { 

    return (
        <ol
            // {...provided.droppableProps}
            // ref={provided.innerRef}
            // className="flex gap-x-3 h-full"
        >
            {/* {orderedData.map((list, index) => {
                return <ListItem key={list.id} index={index} data={list} />;
            })}
            {provided.placeholder} */}
            <ListForm />
            <div className="flex-shrink-0 w-1" />
        </ol>
    );
}