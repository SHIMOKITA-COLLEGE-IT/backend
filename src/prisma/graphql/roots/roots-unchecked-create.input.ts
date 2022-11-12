import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RootsType } from '../prisma/roots-type.enum';
import { UserRootsTracingUncheckedCreateNestedManyWithoutRootsInput } from '../user-roots-tracing/user-roots-tracing-unchecked-create-nested-many-without-roots.input';

@InputType()
export class RootsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RootsType, {nullable:false})
    rootsType!: keyof typeof RootsType;

    @Field(() => String, {nullable:true})
    googleMapUrl?: string;

    @Field(() => String, {nullable:true})
    introductionUrl?: string;

    @Field(() => UserRootsTracingUncheckedCreateNestedManyWithoutRootsInput, {nullable:true})
    users?: UserRootsTracingUncheckedCreateNestedManyWithoutRootsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
