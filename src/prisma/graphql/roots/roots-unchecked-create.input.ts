import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RootsType } from '../prisma/roots-type.enum';
import { MyRootsUncheckedCreateNestedManyWithoutRootsInput } from '../my-roots/my-roots-unchecked-create-nested-many-without-roots.input';

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

    @Field(() => MyRootsUncheckedCreateNestedManyWithoutRootsInput, {nullable:true})
    myRoots?: MyRootsUncheckedCreateNestedManyWithoutRootsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
